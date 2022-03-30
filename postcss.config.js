const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    theme: {
        backgroundColor: theme => ({
         'primary': '#3490dc',
         'secondary': '#ffed4a',
         'danger': '#e3342f',
        })
      }
};