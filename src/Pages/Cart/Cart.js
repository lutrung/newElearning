import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import banner from '../../Assets/Images/banner.jpg';
import { DELETE_ITEM } from '../../Redux/Const/Course-Const';
function Cart() {
    const dispatch = useDispatch()
    const listItemAdd = useSelector(state => state.CourseManagerReducer.listItemAdd)
    const deleteItemAdd = (codeCourse) => {
        dispatch({
            type: DELETE_ITEM,
            codeCourse: codeCourse
        })
    }
    return (
        <div className='cart'>
            <div className='cart-banner' style={{ backgroundImage: `url(${banner})` }}>
                <div className='overlay'></div>
                <div className='banner-content'>
                    <h1 className='content-title'>Chi tiết giỏ hàng</h1>
                </div>
            </div>
            <div className='cart-body'>
                <div className='body-left'>
                    <div className='left-header'>
                        <p>Khóa học</p>
                        <p>Giá trị</p>
                    </div>
                    <div className='left-list'>
                        {listItemAdd?.map((item, index) => {
                            return <div key={index} className='list-item'>
                                <div className='item-left'>
                                    <img className='left-img' src={item.hinhAnh} alt='' onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = `https://picsum.photos/id/${index}/200/300`;
                                    }} />
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
                        {/* <div className='list-item'>
                                <div className='item-left'>
                                    <img className='left-img' src='https://picsum.photos/200/300' alt='' />
                                    <div className='left-detail'>
                                        <div className='detail-top'>
                                            <NavLink to={'/chitiet/' + 'haha'}>Chi tiết</NavLink>
                                            <h2>Angular</h2>
                                        </div>
                                        <p className='detail-bottom'>Lap trinh Backend</p>
                                    </div>
                                </div>
                                <div className='item-right'>
                                    <h2>$xxx</h2>
                                    <Button variant="text" color='error'><DeleteOutlineOutlinedIcon /></Button>
                                </div>
                            </div>
                            <div className='list-item'>
                                <div className='item-left'>
                                    <img className='left-img' src='https://picsum.photos/200/300' alt='' />
                                    <div className='left-detail'>
                                        <div className='detail-top'>
                                            <NavLink to={'/chitiet/' + 'haha'}>Chi tiết</NavLink>
                                            <h2>React</h2>
                                        </div>
                                        <p className='detail-bottom'>Lap trinh Frontend</p>
                                    </div>
                                </div>
                                <div className='item-right'>
                                    <h2>$xxx</h2>
                                    <Button variant="text" color='error'><DeleteOutlineOutlinedIcon /></Button>
                                </div>
                            </div> */}
                    </div>
                </div>
                <div className='body-right'>
                    <h2 className='right-title'>THÔNG TIN ĐƠN HÀNG</h2>
                    <div className='right-item'>
                        <p>Số lượng</p>
                        <p>{listItemAdd.length} khóa học</p>
                    </div>
                    <div className='right-item'>
                        <p>Tạm tính</p>
                        <p>$xxx</p>
                    </div>
                    <div className='right-item'>
                        <input placeholder='Mã giảm giá' />
                        <Button variant="contained" color='primary'>Nhập</Button>
                    </div>
                    <div className='right-item'>
                        <p>Tổng tiền</p>
                        <p>$xxx</p>
                    </div>
                    <Button className='right-payment' variant="contained" color='primary'>TIẾN HÀNH THANH TOÁN</Button>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Cart)