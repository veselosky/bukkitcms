import { createStore } from "vuex";

export default createStore({
  state: () => ({
    licenses: {
      reserved: {
        name: "All rights reserved.",
        notice: "<p>All rights reserved.</p>",
      },
      "cc-by": {
        key: "licenses/cc-by",
        name: "Attribution (CC-BY, free reuse)",
        notice:
          '<p><a href="http://creativecommons.org/licenses/by/4.0/" rel="license"><img style="border-width: 0;" src="https://i.creativecommons.org/l/by/4.0/88x31.png" alt="Creative Commons License" /></a><br />This work is licensed under a <a href="http://creativecommons.org/licenses/by/4.0/" rel="license">Creative Commons Attribution 4.0 International License</a>.</p>',
        url: "http://creativecommons.org/licenses/by/4.0/",
        image: "https://i.creativecommons.org/l/by/4.0/88x31.png",
      },
      "cc-by-nd": {
        key: "licenses/cc-by-nd",
        name: "Attribution No Derivatives (CC-BY-ND)",
        notice:
          '<p><a href="http://creativecommons.org/licenses/by-nd/4.0/" rel="license"><img style="border-width: 0;" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" alt="Creative Commons License" /></a><br />This work is licensed under a <a href="http://creativecommons.org/licenses/by-nd/4.0/" rel="license">Creative Commons Attribution-NoDerivatives 4.0 International License</a>.</p>',
        url: "http://creativecommons.org/licenses/by-nd/4.0/",
        image: "https://i.creativecommons.org/l/by-nd/4.0/88x31.png",
      },
      "cc-by-sa": {
        key: "licenses/cc-by-sa",
        name: "Attribution Share-Alike (CC-BY-SA)",
        notice:
          '<p><a href="http://creativecommons.org/licenses/by-sa/4.0/" rel="license"><img style="border-width: 0;" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Creative Commons License" /></a><br />This work is licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/" rel="license">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</p>',
        url: "http://creativecommons.org/licenses/by-sa/4.0/",
        image: "https://i.creativecommons.org/l/by-sa/4.0/88x31.png",
      },
      "cc-by-nc": {
        key: "licenses/cc-by-nc",
        name: "Non-commercial Reuse (CC-BY-NC)",
        notice:
          '<p><a href="http://creativecommons.org/licenses/by-nc/4.0/" rel="license"><img style="border-width: 0;" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" alt="Creative Commons License" /></a><br />This work is licensed under a <a href="http://creativecommons.org/licenses/by-nc/4.0/" rel="license">Creative Commons Attribution-NonCommercial 4.0 International License</a>.</p>',
        url: "http://creativecommons.org/licenses/by-nc/4.0/",
        image: "https://i.creativecommons.org/l/by-nc/4.0/88x31.png",
      },
      "cc-by-nc-nd": {
        key: "licenses/cc-by-nc-nd",
        name: "Non-commercial No Derivatives (CC-BY-NC-ND)",
        notice:
          '<p><a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" rel="license"><img style="border-width: 0;" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" alt="Creative Commons License" /></a><br />This work is licensed under a <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" rel="license">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.</p>',
        url: "http://creativecommons.org/licenses/by-nc-nd/4.0/",
        image: "https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png",
      },
      "cc-by-nc-sa": {
        key: "licenses/cc-by-nc-sa",
        name: "Non-commercial Share-Alike (CC-BY-NC-SA)",
        notice:
          '<p><a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="license"><img style="border-width: 0;" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" alt="Creative Commons License" /></a><br />This work is licensed under a <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="license">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.</p>',
        url: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
        image: "https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png",
      },
    },
    themes: {
      bs5blog: {
        key: "themes/bs5blog",
        name: "Bootstrap 5 Blog (Basic)",
        description: "Stock Bootstrap 5 blog layout",
        preview: "https://getbootstrap.com/docs/5.1/examples/blog/",
        base_stylesheet: {
          css: "https://bootswatch.com/_vendor/bootstrap/dist/css/bootstrap.css",
          cssMin:
            "https://bootswatch.com/_vendor/bootstrap/dist/css/bootstrap.min.css",
          cssCdn:
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          integrity:
            "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
        },
        custom_stylesheet: null,
        custom_nav_menu: null,
        custom_sidebar: null,
        custom_footer: null,
      },
    },
    sites: {
      "webquills.net": {
        name: "Webquills",
        bucket: "webquills.net",
        key: "sites/webquills.net",
        domain: "www.webquills.net",
        theme: "themes/bs5blog",
      },
      "www-mindvessel-net": {
        name: "Mindvessel",
        bucket: "www-mindvessel-net",
        key: "sites/www-mindvessel-net",
        domain: "www.mindvessel.net",
        theme: "themes/bs5blog",
      },
      "super-site-asdf1234": {
        name: "Super Site",
        bucket: "super-site-asdf1234",
        key: "sites/super-site-asdf1234",
        domain: "",
        theme: "themes/bs5blog",
      },
    },
  }),
  mutations: {},
  actions: {},
  modules: {},
});
