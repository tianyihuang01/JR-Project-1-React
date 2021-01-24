const GoogleMap = () => (
  <div
    dangerouslySetInnerHTML={{
      __html:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402589.81585837575!2d144.77295794697434!3d-37.97169289154851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1610430463105!5m2!1sen!2sau" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    }}
  />
);

export default GoogleMap;
