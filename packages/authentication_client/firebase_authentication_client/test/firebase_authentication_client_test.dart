// ignore_for_file: must_be_immutable
import 'package:authentication_client/authentication_client.dart';
import 'package:firebase_auth/firebase_auth.dart' as firebase_auth;
import 'package:firebase_authentication_client/firebase_authentication_client.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_core_platform_interface/firebase_core_platform_interface.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:mocktail/mocktail.dart';
import 'package:sign_in_with_apple/sign_in_with_apple.dart';

class MockFirebaseAuth extends Mock implements firebase_auth.FirebaseAuth {}

class MockFirebaseUser extends Mock implements firebase_auth.User {}

class MockUserMetadata extends Mock implements firebase_auth.UserMetadata {}

class MockGoogleSignIn extends Mock implements GoogleSignIn {}

@immutable
class MockGoogleSignInAccount extends Mock implements GoogleSignInAccount {
  @override
  bool operator ==(dynamic other) => identical(this, other);

  @override
  int get hashCode => 0;
}

class MockGoogleSignInAuthentication extends Mock
    implements GoogleSignInAuthentication {}

class MockAuthorizationCredentialAppleID extends Mock
    implements AuthorizationCredentialAppleID {}

class MockUserCredential extends Mock implements firebase_auth.UserCredential {}

class FakeAuthCredential extends Fake implements firebase_auth.AuthCredential {}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  MethodChannelFirebase.channel.setMockMethodCallHandler((call) async {
    if (call.method == 'Firebase#initializeCore') {
      return [
        {
          'name': defaultFirebaseAppName,
          'options': {
            'apiKey': '123',
            'appId': '123',
            'messagingSenderId': '123',
            'projectId': '123',
          },
          'pluginConstants': const <String, String>{},
        }
      ];
    }

    if (call.method == 'Firebase#initializeApp') {
      final arguments = call.arguments as Map<String, dynamic>;
      return <String, dynamic>{
        'name': arguments['appName'],
        'options': arguments['options'],
        'pluginConstants': const <String, String>{},
      };
    }

    return null;
  });

  TestWidgetsFlutterBinding.ensureInitialized();
  Firebase.initializeApp();

  const email = 'test@gmail.com';
  const password = 't0ps3cret42';

  group('FirebaseAuthenticationClient', () {
    late firebase_auth.FirebaseAuth firebaseAuth;
    late GoogleSignIn googleSignIn;
    late FirebaseAuthenticationClient firebaseAuthenticationClient;
    late AuthorizationCredentialAppleID authorizationCredentialAppleID;
    late GetAppleCredentials getAppleCredentials;
    late List<List<AppleIDAuthorizationScopes>> getAppleCredentialsCalls;

    setUpAll(() {
      registerFallbackValue(FakeAuthCredential());
    });

    setUp(() {
      firebaseAuth = MockFirebaseAuth();
      googleSignIn = MockGoogleSignIn();
      authorizationCredentialAppleID = MockAuthorizationCredentialAppleID();
      getAppleCredentialsCalls = <List<AppleIDAuthorizationScopes>>[];
      getAppleCredentials = ({
        List<AppleIDAuthorizationScopes> scopes = const [],
        WebAuthenticationOptions? webAuthenticationOptions,
        String? nonce,
        String? state,
      }) async {
        getAppleCredentialsCalls.add(scopes);
        return authorizationCredentialAppleID;
      };
      firebaseAuthenticationClient = FirebaseAuthenticationClient(
        firebaseAuth: firebaseAuth,
        googleSignIn: googleSignIn,
        getAppleCredentials: getAppleCredentials,
      );
    });

    test('creates FirebaseAuth instance internally when not injected', () {
      expect(() => FirebaseAuthenticationClient(), isNot(throwsException));
    });

    group('logInWithApple', () {
      setUp(() {
        when(() => firebaseAuth.signInWithCredential(any()))
            .thenAnswer((_) => Future.value(MockUserCredential()));
        when(() => authorizationCredentialAppleID.identityToken).thenReturn('');
        when(() => authorizationCredentialAppleID.authorizationCode)
            .thenReturn('');
      });

      test('calls getAppleCredentials with correct scopes', () async {
        await firebaseAuthenticationClient.logInWithApple();
        expect(getAppleCredentialsCalls, [
          [
            AppleIDAuthorizationScopes.email,
            AppleIDAuthorizationScopes.fullName,
          ]
        ]);
      });

      test('calls signInWithCredential with correct credential', () async {
        const identityToken = 'identity-token';
        const accessToken = 'access-token';
        when(() => authorizationCredentialAppleID.identityToken)
            .thenReturn(identityToken);
        when(() => authorizationCredentialAppleID.authorizationCode)
            .thenReturn(accessToken);
        await firebaseAuthenticationClient.logInWithApple();
        verify(() => firebaseAuth.signInWithCredential(any())).called(1);
      });

      test('throws LogInWithAppleFailure when exception occurs', () async {
        when(() => firebaseAuth.signInWithCredential(any()))
            .thenThrow(Exception());
        expect(
          () => firebaseAuthenticationClient.logInWithApple(),
          throwsA(isA<LogInWithAppleFailure>()),
        );
      });
    });

    group('sendPasswordResetEmail', () {
      setUp(() {
        when(
          () => firebaseAuth.sendPasswordResetEmail(email: any(named: 'email')),
        ).thenAnswer((_) => Future.value());
      });

      test('calls sendPasswordResetEmail', () async {
        await firebaseAuthenticationClient.sendPasswordResetEmail(email: email);
        verify(() => firebaseAuth.sendPasswordResetEmail(email: email))
            .called(1);
      });

      test('succeeds when sendPasswordResetEMail succeeds', () async {
        expect(
          firebaseAuthenticationClient.sendPasswordResetEmail(email: email),
          completes,
        );
      });

      test(
        'throws ResetPasswordFailure when sendPasswordResetEmail throws',
        () async {
          final firebaseAuthExceptions = {
            'invalid-email': ResetPasswordInvalidEmailFailure(
              Exception(),
              StackTrace.current,
            ),
            'user-not-found': ResetPasswordUserNotFoundFailure(
              Exception(),
              StackTrace.current,
            ),
            'default': ResetPasswordFailure(Exception(), StackTrace.current),
          };

          for (final exception in firebaseAuthExceptions.entries) {
            when(
              () => firebaseAuth.sendPasswordResetEmail(
                email: any(named: 'email'),
              ),
            ).thenThrow(
              firebase_auth.FirebaseAuthException(code: exception.key),
            );

            try {
              await firebaseAuthenticationClient.sendPasswordResetEmail(
                email: email,
              );
            } catch (e) {
              expect(e.toString(), exception.value.toString());
            }
          }
        },
      );

      test('throws ResetPasswordFailure when sendPasswordResetEmail throws',
          () async {
        when(
          () => firebaseAuth.sendPasswordResetEmail(
            email: any(named: 'email'),
          ),
        ).thenThrow(Exception());
        expect(
          firebaseAuthenticationClient.sendPasswordResetEmail(email: email),
          throwsA(isA<ResetPasswordFailure>()),
        );
      });
    });

    group('signUp', () {
      setUp(() {
        when(
          () => firebaseAuth.createUserWithEmailAndPassword(
            email: any(named: 'email'),
            password: any(named: 'password'),
          ),
        ).thenAnswer((_) => Future.value(MockUserCredential()));
      });

      test('calls createUserWithEmailAndPassword', () async {
        await firebaseAuthenticationClient.signUp(
          email: email,
          password: password,
        );
        verify(
          () => firebaseAuth.createUserWithEmailAndPassword(
            email: email,
            password: password,
          ),
        ).called(1);
      });

      test('succeeds when createUserWithEmailAndPassword succeeds', () async {
        expect(
          firebaseAuthenticationClient.signUp(email: email, password: password),
          completes,
        );
      });

      test('throws correct exception based on error code', () async {
        final firebaseAuthExceptions = {
          'email-already-in-use':
              SignUpEmailInUseFailure(Exception(), StackTrace.current),
          'invalid-email':
              SignUpInvalidEmailFailure(Exception(), StackTrace.current),
          'operation-not-allowed':
              SignUpOperationNotAllowedFailure(Exception(), StackTrace.current),
          'weak-password':
              SignUpWeakPasswordFailure(Exception(), StackTrace.current),
          'default': SignUpFailure(Exception(), StackTrace.current),
        };

        for (final exception in firebaseAuthExceptions.entries) {
          when(
            () => firebaseAuth.createUserWithEmailAndPassword(
              email: any(named: 'email'),
              password: any(named: 'password'),
            ),
          ).thenThrow(firebase_auth.FirebaseAuthException(code: exception.key));

          try {
            await firebaseAuthenticationClient.signUp(
              email: email,
              password: password,
            );
          } catch (e) {
            expect(e.toString(), exception.value.toString());
          }
        }
      });

      test('throws SignUpFailure when createUserWithEmailAndPassword throws',
          () async {
        when(
          () => firebaseAuth.createUserWithEmailAndPassword(
            email: any(named: 'email'),
            password: any(named: 'password'),
          ),
        ).thenThrow(Exception());
        expect(
          firebaseAuthenticationClient.signUp(email: email, password: password),
          throwsA(isA<SignUpFailure>()),
        );
      });
    });

    group('loginWithGoogle', () {
      const accessToken = 'access-token';
      const idToken = 'id-token';

      setUp(() {
        final googleSignInAuthentication = MockGoogleSignInAuthentication();
        final googleSignInAccount = MockGoogleSignInAccount();
        when(() => googleSignInAuthentication.accessToken)
            .thenReturn(accessToken);
        when(() => googleSignInAuthentication.idToken).thenReturn(idToken);
        when(() => googleSignInAccount.authentication)
            .thenAnswer((_) async => googleSignInAuthentication);
        when(() => googleSignIn.signIn())
            .thenAnswer((_) async => googleSignInAccount);
        when(() => firebaseAuth.signInWithCredential(any()))
            .thenAnswer((_) => Future.value(MockUserCredential()));
      });

      test('calls signIn authentication, and signInWithCredential', () async {
        await firebaseAuthenticationClient.logInWithGoogle();
        verify(() => googleSignIn.signIn()).called(1);
        verify(() => firebaseAuth.signInWithCredential(any())).called(1);
      });

      test('succeeds when signIn succeeds', () {
        expect(firebaseAuthenticationClient.logInWithGoogle(), completes);
      });

      test('throws LogInWithGoogleFailure when exception occurs', () async {
        when(() => firebaseAuth.signInWithCredential(any()))
            .thenThrow(Exception());
        expect(
          firebaseAuthenticationClient.logInWithGoogle(),
          throwsA(isA<LogInWithGoogleFailure>()),
        );
      });

      test('throws LogInWithGoogleCanceled when signIn returns null', () async {
        when(() => googleSignIn.signIn()).thenAnswer((_) async => null);
        expect(
          firebaseAuthenticationClient.logInWithGoogle(),
          throwsA(isA<LogInWithGoogleCanceled>()),
        );
      });
    });

    group('logInWithEmailAndPassword', () {
      setUp(() {
        when(
          () => firebaseAuth.signInWithEmailAndPassword(
            email: any(named: 'email'),
            password: any(named: 'password'),
          ),
        ).thenAnswer((_) => Future.value(MockUserCredential()));
      });

      test('calls signInWithEmailAndPassword', () async {
        await firebaseAuthenticationClient.logInWithEmailAndPassword(
          email: email,
          password: password,
        );
        verify(
          () => firebaseAuth.signInWithEmailAndPassword(
            email: email,
            password: password,
          ),
        ).called(1);
      });

      test('succeeds when signInWithEmailAndPassword succeeds', () async {
        expect(
          firebaseAuthenticationClient.logInWithEmailAndPassword(
            email: email,
            password: password,
          ),
          completes,
        );
      });

      test(
          'throws LogInWithEmailAndPasswordFailure '
          'when signInWithEmailAndPassword throws', () async {
        when(
          () => firebaseAuth.signInWithEmailAndPassword(
            email: any(named: 'email'),
            password: any(named: 'password'),
          ),
        ).thenThrow(Exception());
        expect(
          firebaseAuthenticationClient.logInWithEmailAndPassword(
            email: email,
            password: password,
          ),
          throwsA(isA<LogInWithEmailAndPasswordFailure>()),
        );
      });
    });

    group('logOut', () {
      test('calls signOut', () async {
        when(() => firebaseAuth.signOut()).thenAnswer((_) async {});
        when(() => googleSignIn.signOut()).thenAnswer((_) async => null);
        await firebaseAuthenticationClient.logOut();
        verify(() => firebaseAuth.signOut()).called(1);
        verify(() => googleSignIn.signOut()).called(1);
      });

      test('throws LogOutFailure when signOut throws', () async {
        when(() => firebaseAuth.signOut()).thenThrow(Exception());
        expect(
          firebaseAuthenticationClient.logOut(),
          throwsA(isA<LogOutFailure>()),
        );
      });
    });

    group('user', () {
      const userId = 'mock-uid';
      const email = 'mock-email';
      const newUser = User(id: userId, email: email);
      const returningUser = User(id: userId, email: email, isNewUser: false);
      test('emits User.anonymous when firebase user is null', () async {
        when(() => firebaseAuth.authStateChanges()).thenAnswer(
          (_) => Stream.value(null),
        );
        await expectLater(
          firebaseAuthenticationClient.user,
          emitsInOrder(const <User>[User.anonymous]),
        );
      });

      test('emits new user when firebase user is not null', () async {
        final firebaseUser = MockFirebaseUser();
        final userMetadata = MockUserMetadata();
        final creationTime = DateTime(2020);
        when(() => firebaseUser.uid).thenReturn(userId);
        when(() => firebaseUser.email).thenReturn(email);
        when(() => userMetadata.creationTime).thenReturn(creationTime);
        when(() => userMetadata.lastSignInTime).thenReturn(creationTime);
        when(() => firebaseUser.photoURL).thenReturn(null);
        when(() => firebaseUser.metadata).thenReturn(userMetadata);
        when(() => firebaseAuth.authStateChanges()).thenAnswer(
          (_) => Stream.value(firebaseUser),
        );
        await expectLater(
          firebaseAuthenticationClient.user,
          emitsInOrder(const <User>[newUser]),
        );
      });

      test('emits new user when firebase user is not null', () async {
        final firebaseUser = MockFirebaseUser();
        final userMetadata = MockUserMetadata();
        final creationTime = DateTime(2020);
        final lastSignInTime = DateTime(2019);
        when(() => firebaseUser.uid).thenReturn(userId);
        when(() => firebaseUser.email).thenReturn(email);
        when(() => userMetadata.creationTime).thenReturn(creationTime);
        when(() => userMetadata.lastSignInTime).thenReturn(lastSignInTime);
        when(() => firebaseUser.photoURL).thenReturn(null);
        when(() => firebaseUser.metadata).thenReturn(userMetadata);
        when(() => firebaseAuth.authStateChanges()).thenAnswer(
          (_) => Stream.value(firebaseUser),
        );
        await expectLater(
          firebaseAuthenticationClient.user,
          emitsInOrder(const <User>[returningUser]),
        );
      });
    });
  });
}