const TeamContactusCard = () => {
  return (
    <div className="  container my-5 px-5">
      <div className="container px-5">
        <div className="row px-3">
          <div className="container px-3">
            <div className="card  shadow-lg border-0 px-4  py-4">
              <div className="row">
                <div className="col-10">
                  <div className="card-body">
                    <h3 className=" h3 mainColor fw-semibold">Join our team</h3>
                    <p className=" paraColor text-muted ">
                      Would you like more info about other trips or you want to
                      book a special excursion?
                    </p>
                  </div>
                </div>
                <div className="col-2 d-flex align-self-center  ">
                  <a href="#" className="btn  customButton px-4 py-2">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContactusCard;
