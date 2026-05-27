import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function RegistrationForm() {
	const [formData, setFormData] = React.useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [errors, setErrors] = React.useState({});
	const [validated, setValidated] = React.useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = {};

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			newErrors.email = "Email không hợp lệ!";
		}

		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		if (!passwordRegex.test(formData.password)) {
			newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ và số!";
		}

		if (formData.username.trim() === "") {
			newErrors.username = "Tên đăng nhập không được để trống!";
		}

		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Mật khẩu và xác nhận mật khẩu không khớp!";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			setValidated(true);
			return;
		}

		// Nếu tất cả validation đều hợp lệ
		alert("Đăng ký thành công!");

		// Chuyển hướng đến trang chủ sau 1 giây
		setTimeout(() => {
			window.location.href = "/";
		}, 1000);

		// Reset form
		setFormData({
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
		setErrors({});
		setValidated(false);
	};

	const handleCancel = () => {
		setFormData({
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
		setErrors({});
		setValidated(false);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		// Xóa lỗi khi người dùng bắt đầu nhập lại
		if (errors[name]) {
			setErrors({ ...errors, [name]: null });
		}
	};

	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col md={6}>
					<h2>Đăng ký</h2>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="username">
							<Form.Label>Tên đăng nhập:</Form.Label>
							<Form.Control
								type="text"
								name="username"
								value={formData.username}
								onChange={handleChange}
								isInvalid={!!errors.username}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.username}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group className="mb-3" controlId="email">
							<Form.Label>Email:</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								isInvalid={!!errors.email}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.email}
							</Form.Control.Feedback>
						</Form.Group>
<Form.Group className="mb-3" controlId="password">
<Form.Label>Mật khẩu:</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								isInvalid={!!errors.password}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.password}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group className="mb-3" controlId="confirmPassword">
							<Form.Label>Xác nhận mật khẩu:</Form.Label>
							<Form.Control
								type="password"
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleChange}
								isInvalid={!!errors.confirmPassword}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.confirmPassword}
							</Form.Control.Feedback>
						</Form.Group>

						<Button variant="primary" type="submit">
							Đăng ký
						</Button>
						<Button variant="secondary" type="button" className="ms-2" onClick={handleCancel}>
							Hủy
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}