//1.Footer component hiện thị thông tin bản quyền và liên kết đến các trang chủ của tác giả:ID,Tên,Email,Facebook,LinkedIn,Github,Link Github
import React from 'react';
function Footer({ id, name, email, github }) {
    return (
        <footer className="app-footer">
            <div className="footer-info">
                <p>&copy; ID: {id}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="footer-link">
                    GitHub profile
                </a>
            )}
        </footer>
    );
}

export default Footer;