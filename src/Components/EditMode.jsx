import React from "react";

const EditMode = ({ todo, setIsEditMode, handleEdit }) => {
  return (
    <form
      onSubmit={handleEdit}
      className="d-flex gap-4 w-100 justify-content-between"
    >
      <select defaultValue={todo.status} className="form-select w-25 shadow">
        <option>Varsayılan</option>
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>
      <input defaultValue={todo.title} className="form-control shadow w-50" />
      <div className="btn-group">
        <button type="submit" className="btn btn-sm btn-primary">
          Kayıt
        </button>
        <button
          type="button"
          onClick={() => setIsEditMode(false)}
          className="btn btn-sm btn-danger"
        >
          İptal
        </button>
      </div>
    </form>
  );
};

export default EditMode;
