(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const cookieElementContext = {
      cookieStatement: 'We use cookies to give you the best online experience.',
      siteOwnership: 'By using our website, you agree to our',
      acceptBtn: 'Accept and Close',
      linkToPolicy: 'https://google.com',
      linkText: 'Privacy Policy',
    };

    const wrapper = document.createElement('div');
    wrapper.classList.add('cookie-disclaimer');
    wrapper.innerHTML += `
    <button class="cookie-disclaimer-close-btn">X</button>
    <p>${cookieElementContext.cookieStatement}</p>
    <p>${cookieElementContext.siteOwnership} <a href="${cookieElementContext.linkToPolicy}" target="_blank"> ${cookieElementContext.linkText}</a></p>
    <button class="cookie-disclaimer-accept-btn">${cookieElementContext.acceptBtn}</button>
    `;

    document.body.appendChild(wrapper);

    const getCookie = (name) => {
      return document.cookie
        .split('; ')
        .find((row) => row.startsWith(name + '='));
    };

    if (getCookie('cookie-disclaimer')) {
      wrapper.classList.add('cookie-disclaimer-disabled');
    } else {
      wrapper.classList.remove('cookie-disclaimer-disabled');
    }

    const setCookie = (name, value, days) => {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = '; expires=' + date;
      document.cookie = name + '=' + (value || '') + expires + '; path=/';
    };

    document
      .querySelector('.cookie-disclaimer-accept-btn')
      .addEventListener('click', () => {
        setCookie('cookie-disclaimer', true, 30);
        wrapper.classList.add('cookie-disclaimer-disabled');
      });

    document
      .querySelector('.cookie-disclaimer-close-btn')
      .addEventListener('click', () => {
        wrapper.classList.add('cookie-disclaimer-disabled');
      });
  });
})();
