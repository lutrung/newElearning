import Axios from "axios";
import Swal from "sweetalert2";
import { history } from "../../Util/history";
import { PERSONAL_INFO, SIGN_IN } from "../Const/Course-Const";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0";
export const signInAction = (accounts) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: accounts,
        headers: {
          TokenCybersoft: token,
        },
      });
      localStorage.setItem("USER_SIGNIN", JSON.stringify(result.data));
      localStorage.setItem("ACCESSTOKEN", result.data.accessToken);
      dispatch({
        type: SIGN_IN,
        userSignIn: result.data,
      });
      Swal.fire({
        title: "Thông báo",
        icon: "success",
        text: "Đăng nhập thành công",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
      }).then(() => {
        window.location.href = "/";
      });
      // history.push('/')
      // window.location.href = '/'
    } catch (err) {
      console.log("err", err);
      Swal.fire("Thông báo", "Tài khoản hoặc mật khẩu không đúng", "error");
    }
  };
};
export const signUpAction = (accounts) => {
  return async () => {
    try {
      await Axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: accounts,
        headers: {
          TokenCybersoft: token,
        },
      });
      Swal.fire({
        title: "Thông báo",
        icon: "success",
        text: "Đăng ký thành công",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Đăng nhập",
      }).then(() => {
        window.location.href = "/dangnhap";
      });
      // history.push('/dangnhap')
    } catch (error) {
      Swal.fire("Thông báo", "Đăng ký thất bại", "error");
    }
  };
};
export const getPersonalInfo = () => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("ACCESSTOKEN"),
          TokenCybersoft: token,
        },
      });
      dispatch({
        type: PERSONAL_INFO,
        personalInfo: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateInfo = (formUser) => {
  return async (dispatch) => {
    try {
      await Axios({
        url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        method: "PUT",
        data: formUser,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("ACCESSTOKEN"),
          TokenCybersoft: token,
        },
      });
      dispatch(getPersonalInfo());
      Swal.fire("Thông báo", "Cập nhật thành công", "success");
    } catch (error) {
      Swal.fire("Thông báo", "Cập nhật thất bại", "error");
      console.log(error);
    }
  };
};
