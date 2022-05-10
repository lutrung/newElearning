import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import userlogo from '../../Assets/Images/user.png';
import { getPersonalInfo, updateInfo } from '../../Redux/Action/UserAction';
import { DELETE_ITEM } from '../../Redux/Const/Course-Const';
function PersonalInfomation() {
  const dispatch = useDispatch()

  const [update, setUpdate] = useState(false);
  const personalInfo = useSelector(state => state.UserManagerReducer.personalInfo)
  const listItemAdd = useSelector(state => state.CourseManagerReducer.listItemAdd)

  const [user, setUser] = useState({
    taiKhoan: 'Loading...',
    matKhau: 'Loading...',
    hoTen: 'Loading...',
    soDT: 'Loading...',
    email: 'Loading...',

  });

  const deleteItemAdd = (codeCourse) => {
    dispatch({
      type: DELETE_ITEM,
      codeCourse: codeCourse
    })
  }
  const onChangeInput = (event) => {
    let { value, name } = event.target
    let newFormInfo = { ...user, [name]: value }
    setUser(newFormInfo)
  }

  const onEdit = () => {
    setUpdate(!update)
  }

  const onUpdate = () => {
    dispatch(updateInfo(user))
    setUpdate(false)

  }

  useEffect(() => {
    if (personalInfo.taiKhoan) {
      setUser(personalInfo)
    }
  }, [personalInfo]);
  useEffect(() => {
    dispatch(getPersonalInfo())
  }, [dispatch]);

  return <div className='personal'>
    <div className='personal-container'>
      <div className='personal-left'>
        <div className='left-left'>
          <img className='left-avatar' src={userlogo} alt='' />
          <h2 className='left-name'>{user.hoTen}</h2>
        </div>
        <div className="left-right nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Thông tin tài khoản</button>
          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Khóa học ghi danh</button>
          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Khóa học của tôi</button>
        </div>
      </div>
      <div className='personal-right'>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <h2 className='right-title'>Thông tin tài khoản</h2>
            <Box sx={{
              textAlign: 'right',
              '& .MuiTextField-root': { mb: 5, boxShadow: '0.5rem 0.5rem #a8b8c8' },
              '& .MuiInputLabel-root': { top: '-3px' },
              '& .MuiOutlinedInput-root.Mui-disabled': { backgroundColor: '#dddddd' }
            }}>
              <TextField fullWidth name='taiKhoan' id="outlined-basic" label="Tài khoản" variant="outlined" disabled value={user.taiKhoan} />
              <TextField fullWidth name='matKhau' id="outlined-basic" label="Mật khẩu" variant="outlined" disabled={update ? false : true} value={user.matKhau} onChange={onChangeInput} />
              <TextField fullWidth name='hoTen' id="outlined-basic" label="Họ tên" variant="outlined" disabled={update ? false : true} value={user.hoTen} onChange={onChangeInput} />
              <TextField fullWidth name='soDT' id="outlined-basic" label="Số điện thoại" variant="outlined" disabled={update ? false : true} value={user.soDT} onChange={onChangeInput} />
              <TextField fullWidth name='Email' id="outlined-basic" label="Email" variant="outlined" disabled={update ? false : true} value={user.email} onChange={onChangeInput} />
              {update ? <Fragment><Button variant="contained" color='success' onClick={onUpdate}>Cập nhật thông tin</Button><Button sx={{ marginLeft: '5px' }} variant="contained" color='error' onClick={onEdit}>Hủy</Button></Fragment> : <Button onClick={onEdit} variant="contained">Sửa thông tin</Button>}

            </Box>
          </div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <h2 className='right-title'>Khóa học ghi danh</h2>
            <div className='body-left'>
              <div className='left-header'>
                <p>Khóa học</p>
                <p>Giá trị</p>
              </div>
              <div className='left-list'>
                {listItemAdd?.map((item, index) => {
                  return <div key={index} className='list-item'>
                    <div className='item-left'>
                      <img className='left-img' src={item.hinhAnh} alt='' />
                      <div className='left-detail'>
                        <div className='detail-top'>
                          <NavLink to={'/chitiet/' + item.maKhoaHoc}>Chi tiết</NavLink>
                          <h2>{item.tenKhoaHoc}</h2>
                        </div>
                        <p className='detail-bottom'>{item.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</p>
                      </div>
                    </div>
                    <div className='item-right'>
                      <h2>$xxx</h2>
                      <Button variant="text" color='error' onClick={() => deleteItemAdd(item.maKhoaHoc)}><DeleteOutlineOutlinedIcon /></Button>
                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <h2 className='right-title'>Khóa học của tôi</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default React.memo(PersonalInfomation)