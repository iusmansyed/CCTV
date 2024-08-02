import React from 'react'

const CCTV9 = ({ formData, handleChange }) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <div className='inp'>
                        <label htmlFor="">Brief description of Installation Area</label>
                        <input type="text" id="" name="AccessInstall"
                            value={formData.AccessInstall}
                            onChange={handleChange} placeholder='Enter access requirements' />
                    </div>
                    <div className='inp'>
                        <label htmlFor="">Current Security System (Brand/Model, Integration Capability)</label>
                        <input type="text" name='currentSecuritySystem' value={formData.currentSecuritySystem}
                            onChange={handleChange} id="" placeholder='Enter current system details' />
                    </div>
                    {/* <div className='inp'>
                        <label htmlFor="">Any Existing CCTV Equipment </label>
                        <input type="text" name='anyExisting' value={formData.anyExisting}
                            onChange={handleChange} id="" placeholder=' Enter equipment details' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CCTV9