import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className="container">
            <div className="grid grid-cols-6">
              <div>
                <div className="">
                  <h2>HỖ TRỢ KH&Aacute;CH H&Agrave;NG</h2>
                  <ul className='space-y-3 pt-4'>
                    <li><a href="{{URL::to('/lien-he')}}">Hotline</a></li>
                    <li><a href="#">C&acirc;u hỏi thường gặp</a></li>
                    <li><a href="#">Hướng dẫn đặt h&agrave;ng</a></li>
                    <li><a href="#">Phương thức vận chuyển</a></li>
                    <li><a href="#">Ch&iacute;nh s&aacute;ch đổi trả</a></li>
                    <li><a href="{{URL::to('/lien-he')}}">Hỗ trợ bảo h&agrave;nh</a></li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="">
                  <h2>VỀ XUDISHOP</h2>
                  <ul className='space-y-3 pt-4'>
                    <li><a href="{{URL::to('/lien-he')}}">Giới thiệu Xudi</a></li>
                    <li><a href="#">B&aacute;n h&agrave;ng doanh nghiệp</a></li>
                    <li><a href="#">Đối t&aacute;c với Ch&uacute;ng T&ocirc;i</a></li>
                    <li><a href="#">Quy chế hoạt động</a></li>
                    <li><a href="#">Bản quyền</a></li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <h2>HỢP T&Aacute;C V&Agrave; LI&Ecirc;N HỆ</h2>
                  <ul className='space-y-3 pt-4'>
                    <li><a href="#">Tin khuyến m&atilde;i</a></li>
                    <li><a href="{{URL::to('/lien-he')}}">Li&ecirc;n hệ v&agrave; hợp t&aacute;c</a></li>
                    <li><a href="{{URL::to('/lien-he')}}">Tư vấn b&aacute;n h&agrave;ng</a></li>
                    <li><a href="{{URL::to('/lien-he')}}">Hỗ trợ kỹ thuật</a></li>
                    <li><a href="{{URL::to('/lien-he')}}">G&oacute;p &yacute; khiếu nại dịch vụ</a></li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <h2>THANH TO&Aacute;N</h2>
                  <ul className='space-y-3 pt-4'>
                    <li><a href="#">Điều khoản thanh to&aacute;n</a></li>
                    <li><a href="#">V&iacute; Xudi</a></li>
                    <li><a href="#">Visa v&agrave; thanh to&aacute;n online</a></li>
                    <li><a href="#">V&iacute; điện tử</a></li>
                    <li><a href="#">Paypal cổng thanh to&aacute;n trực tuyến</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2">
                <div className="space-y-3">
                  <h2>Gửi Email cho ch&uacute;ng T&ocirc;i:</h2>
                  <form className="flex gap-1" action="#">
                  <input type="text" placeholder="Your email address" className='w-2/3 p-2 border-primary border rounded'/> 
                  <button className="btn btn-primary" type="submit">submit</button>
                  </form>
                  <p>Bạn lựa chọn Xudi l&agrave; "Đi Đ&uacute;ng Đường"<br />Bạn chọn Xudi l&agrave; "Đi Đ&uacute;ng Gi&aacute;"...</p>

                  </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="flex justify-between pt-5">
              <p className="pull-left">Copyright &copy; 2013 Xudishop Inc. All rights reserved.</p>
              <p className="pull-right">Designed by <a href="https://www.Xudishop.com" target="_blank">Xudishop</a></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer