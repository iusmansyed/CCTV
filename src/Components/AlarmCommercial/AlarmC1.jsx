import React from 'react';
import CustomDropdown from '../Dropdown/DropDown';

const categoryOptions = [
  { value: "", label: "What Sector" },
  { value: "Retail", label: "Retail" },
  { value: "Hospitality", label: "Hospitality" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Finance and Banking", label: "Finance and Banking" },
];

const AlarmC1 = ({ formData, handleChange }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <CustomDropdown
            options={categoryOptions}
            name="selectSector"
            value={formData.selectSector}
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-6">
          <label>Internet Connection Installed/Wireless</label>
          <div className="col-lg-4">
            <div className="check">
              <label>
                <input
                  type="checkbox"
                  name="wired"
                  checked={formData.wired}
                  onChange={(e) =>
                    handleChange({
                      target: {
                        name: e.target.name,
                        value: e.target.checked,
                      },
                    })
                  }
                />
                Wired
              </label>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="check">
              <label>
                <input
                  type="checkbox"
                  name="wireless"
                  checked={formData.wireless}
                  onChange={(e) =>
                    handleChange({
                      target: {
                        name: e.target.name,
                        value: e.target.checked,
                      },
                    })
                  }
                />
                Wireless
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlarmC1;
