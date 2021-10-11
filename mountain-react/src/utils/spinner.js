// bootstrap 的spinner
export const spinner = (
  <>
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: '610px' }}
    >
      <div className="spinner-border text-success" role="status"></div>
      <span
        className="mt-3"
        style={{ color: '#6da77f', fontWeight: 'bolder', fontSize: 'large' }}
      >
        Loading...
      </span>
    </div>
  </>
);
