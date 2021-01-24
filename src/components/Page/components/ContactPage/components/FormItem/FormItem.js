const FormItem = ({ id, desc, fa, pattern, invalid }) => (
  <span>
    <label className="sr-only" htmlFor={id}>
      {desc}
    </label>
    <div className="input-group mb-2 mr-sm-2">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <i className={`fa fa-${fa}`}></i>
        </div>
      </div>
      {(() => {
        switch (desc) {
          case "Full Name":
          case "Email Address":
            return (
              <input
                type="text"
                className="form-control"
                id={id}
                placeholder={desc}
                pattern={pattern}
                required
              />
            );

          case "Message for me":
            return (
              <textarea
                type="text"
                className="form-control"
                id={id}
                placeholder={desc}
                required
              />
            );
        }
      })()}

      <div className="invalid-feedback">{invalid}</div>
    </div>
  </span>
);

export default FormItem;
