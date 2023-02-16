

function Contact() {
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
    <div className="text-center lg:text-left text-white leading-relaxed">
      <h1 className="text-5xl font-bold text-purple-400">Get In Touch Now!</h1>
      <p className="py-6">I am interested in full time Web Developer roles, Freelance opportunities or opportunities to work in a Start-Up.
      <br />
      However, if you have other request or questions, don't hesitate to contact me using below form either.
      <br />
      Else, send a mail to <span className="text-purple-400">kumpraj@gmail.com</span>
      </p>
    </div>
    <div className="mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form action="https://getform.io/f/bbb6cd5e-bf59-4517-ae6f-274803130a75" method="POST">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" name="subject" placeholder="Subject" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type="text" name="message" placeholder="Message" className="textarea textarea-bordered" />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
    )
  }
  
  export default Contact