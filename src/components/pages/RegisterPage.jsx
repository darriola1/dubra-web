import RegisterForm from '../auth/RegisterForm';
import HeroSection from '../HeroSection';

const RegisterPage = () => {
  return (
        <div className='pt-20'>
          <HeroSection
          title={'¡Comencemos!'}
          extraComponent={<RegisterForm/>}
          background={'bg-gradient-to-br from-dubraText to-dubraPrimary'}
          fit={true}
          />
        </div>
        
  );
};

export default RegisterPage;