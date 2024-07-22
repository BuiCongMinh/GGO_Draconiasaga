import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <span className='limit_18'></span>
            <div className="logo_wrap">
                <span className='logo_sugarfun'></span>
                <span className='logo_hhgames'></span>
            </div>
            <p>Draconia Saga</p>
            <div className="link">
                <a href="">Hỗ trợ</a>
                <a href="">Cài Đặt</a>
                <a href="https://funtapcorp.vn/dieu-khoan">Điều khoản</a>
                <a href="https://funtapcorp.vn/bao-mat">Bảo mật</a>
            </div>
            <p>
                Thời gian:
                <strong> 9:00-18:00 thứ 2- thứ 6 </strong>
                (GMT+7)
            </p>
            <p>Chơi quá 180 phút mỗi ngày sẽ ảnh hưởng xấu đến sức khỏe </p>
            <p>
                Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số:
                <br />
                QĐ số 676/QĐ-BTTTT cấp ngày 26/04/2024
            </p>
            <p>Người chịu trách nhiệm nội dung: Ông Hoàng Quý Dương</p>
            <p>Tầng 4 Tòa Tây Hà, 19 P. Tố Hữu, Khu đô thị Phùng Khoang, Quận Nam Từ Liêm, Hà Nội</p>
        </div>
    )
}

export default Footer