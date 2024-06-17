import React from 'react'

const Modal = () => {
  return (
    <dialog
            id="my_modal_5"
            className="modal modal-middle sm:modal-middle"
          >
            <div className="modal-box">
              
              <div className="modal-action mt-0">
              <form className="card-body" method='dialog'>
              <h1 className=' font-primary font-semibold text-lg'>Please Login!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type='submit' value='Login' className="btn btn-primary" />
              </div>
            </form>
              </div>
            </div>
          </dialog>
  )
}

export default Modal