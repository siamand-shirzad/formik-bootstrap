import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Formikcontrol from './formikComponents/formikControl';

const initialValues = {
	user_name: '',
	last_name: '',
	email: '',
	mobile: '',
	password: '',
	confirm_password: '',
	auth_mode: ''
};
const onSubmit = values => {
	console.log(values);
};
const validationSchema = Yup.object({
	email: Yup.string()
		.required('لطفا این قسمت را پر کنید')
		.email('لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb'),
	password: Yup.string()
		.required('لطفا این قسمت را پر کنید')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'حد اقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کارکترهای خاص استفاده کنید'
		)
});

const Register = () => {
	return (
		<div className="limiter">
			<div className="container-login100">
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}>
					{formik => {
						console.log(formik);
						return (
							<div className="wrap-login100">
								<Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
									<span className="login100-form-title">ثبت نام اعضا</span>

									<Formikcontrol
										formik={formik}
										control="input"
										type="text"
										name="phone"
										icon="fa fa-mobile"
										label="شماره تلفن همراه"
									/>
									<Formikcontrol
										formik={formik}
										control="input"
										type="password"
										name="password"
										icon="fa fa-lock"
										label="رمز عبور"
									/>
									<Formikcontrol
										formik={formik}
										control="input"
										type="password"
										name="c_password"
										icon="fa fa-lock"
										label="تایید رمز عبور"
									/>

									<div className="container-login100-form-btn">
										<button className="login100-form-btn">ثبت نام</button>
									</div>
									<div className="text-center p-t-12 p-b-45">
										<a className="txt2" href="#">
											قبلا ثبت نام کرده ام
										</a>
									</div>

								</Form>
								<div className="login100-pic js-tilt" data-tilt>
									<img src="/auth/images/img-01.png" alt="IMG" />
								</div>
							</div>
						);
					}}
				</Formik>
			</div>
		</div>
	);
};
export default Register;
