const employee_section = document.querySelector(".employee_section");
const app = {
  appController: () => {
    fetch(`https://api.github.com/users`)
      .then(res => res.json())
      .then(data => {
        const html = data
          .map(
            (user, index) => `
              <div class="employee_details columns">
                <div class="column user_img_wrapper">
                  <span class="user_checkbox">
                    <label class="container">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </span>
                  <span><img class="user_avatar" src="${
                    user.avatar_url
                  }"/></span>
                </div>
                <div class="column item_container">
                  <span class="item_name">${user.login}</span>
                  <span class="item_title">Sofware Engineer</span>
                </div>
                <div class="column item_container">
                  <span class="item_name">320.00 NOK</span>
                  <span class="item_title">full time</span>
                </div>
                <div class="column item_container">
                  <span class="item_name">test period</span>
                  <span class="item_title">2 months</span>
                </div>
                <div class="column">
                  <span class="edit_icon"><a href="#" class="edit_link"><i class="fa fa-pencil" aria-hidden="true"></i></a></span>
                  <span class="pipe_span"></span>
                  <span class="delete_icon"><a href="#" class="delete_link"><i class="fa fa-trash"></i></a></span>
                </div>
              </div>
            `
          )
          .join("");
        employee_section.innerHTML += html;
      })
      .catch(err => console.log(err));
  }
};
