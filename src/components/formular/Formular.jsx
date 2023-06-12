// RegisterScreen.js
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/Spinner'
import { loginUser } from '../../features/authActions'
import './Formular.css'


const LoginScreen = () => {
  const { loading, error } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()
    dispatch(loginUser(data))
  }
  return (
    <section className="sign-in-content">
      <form onSubmit={handleSubmit(submitForm)}>
        {error}
        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='form-input'
            {...register('email')}
            required
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-input'
            {...register('password')}
            required
          />
        </div>
        <button type='submit' className='button' disabled={loading}>
          {loading ? <Spinner /> : 'login'}
        </button>
      </form>
    </section>
  )
}
export default LoginScreen