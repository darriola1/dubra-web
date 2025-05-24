import LoginForm from '../auth/LoginForm';
import HeroSection from '../HeroSection';

const LoginPage = () => {
  return (
    <div className='pt-20'>
          <HeroSection
          title={'Bienvenido de nuevo'}
          extraComponent={<LoginForm/>}
          background={'bg-gradient-to-br from-dubraText to-dubraPrimary'}
          fit={true}
          />
    </div>
  );
};

export default LoginPage;