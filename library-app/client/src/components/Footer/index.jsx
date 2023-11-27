import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="bg-dark ">
      <div className="text-center">
        {location.pathname !== '/' && (
          <button
            className="btn  btn-lg btn-block btn-darks text-white"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4 className='text-center text-white p-5'>&copy; {new Date().getFullYear()} - C.L.E.O</h4>
      </div>
    </footer>
  );
};

export default Footer;