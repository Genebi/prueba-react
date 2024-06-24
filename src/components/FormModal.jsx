import { useState } from "react";

export function FormModal({showModal, handleClose}) {

    return (
        <>
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                    </div>
                    <div className="modal-body">
                      <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={handleClose}>
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </>
    )
}