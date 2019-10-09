// import project1 from '../../.assets/project1.png';
import project2 from '../../assets/project2.png';

// import project3 from ../assets/project3.png;

const backendData = [
    {
        id: 1,
        title: 'Greet using Routes',
        description: 'Create a simple Web Application using ExpressJS with a route that allows you to greet different people using a HTTP GET route.',
        link: 'https://aizy.herokuapp.com"',
        image: project2
    },
    {
        id: 2,
        title: 'Waiter Availability',
        description: 'Your sister is running a coffee shop in town, she needs a web application to help her schedule weekly waiter shifts.',
        link: 'https://aizy-waiter-app.herokuapp.com/waiter/name',
        image: project2
    },
    {
        id: 3,
        title: '>Shoe Catalogue API',
        description: 'Introduction to APIs, Created an invetory system for a shoe catalogue and created an API.',
        link: 'https://azola-shoeapi-app.herokuapp.com"',
        image: project2
    },
  

];


backendData.forEach(element => {

    console.log(element)
    
});
export default backendData;







































