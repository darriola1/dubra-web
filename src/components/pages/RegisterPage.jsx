import RegisterForm from '../auth/RegisterForm';
import HeroSection from '../HeroSection';

const RegisterPage = () => {
  return (
        <div className='pt-20'>
          <HeroSection
          extraComponent={<RegisterForm/>}
          background={'bg-gradient-to-br from-dubraText to-dubraPrimary pt-25'}
          customHeight='h-full'
          centerContent={true}
          />
        </div>
        
  );
};

export default RegisterPage;