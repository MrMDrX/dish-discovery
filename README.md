# Dish Discovery App

A simple and intuitive recipe finder app that allows users to search for recipes, view detailed information, and save their favorite dishes for easy access.

## Features

- **Search Recipes**: Quickly find recipes by entering keywords related to the dish you want to cook.
- **Favorites**: Save your favorite recipes and easily remove them from your favorites list.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Loading States**: Placeholder skeleton cards to enhance user experience while data is being fetched.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing and navigation in the app.
- **Edamam API**: Used to fetch recipe data based on user queries.
- **Tailwind CSS**: For styling the application with utility-first CSS.
- **DaisyUI**: For a modern and intuitive user interface.

## Screenshots

| Home Page                                                                                    |
| -------------------------------------------------------------------------------------------- |
| ![Home Page](https://github.com/MrMDrX/dish-discovery/blob/main/public/screenshots/home.png) |

| Favorites Page                                                                                         |
| ------------------------------------------------------------------------------------------------------ |
| ![Favorites Page](https://github.com/MrMDrX/dish-discovery/blob/main/public/screenshots/favorites.png) |

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MrMDrX/dish-discovery.git
   cd dish-discovery
   ```

2. **Install dependencies**:

   ```bash
   pnpm i
   ```

3. **Set up environment variables**:

   Get your Edamam API credentials from 👉 [Edamam](https://www.edamam.com/) and then create a `.env` file in the root directory and add your Edamam API credentials:

   ```plaintext
   VITE_APP_ID=your_app_id
   VITE_APP_KEY=your_app_key
   ```

4. **Run the application**:

   ```bash
   pnpm dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:5173` to view the application.

## Usage

- **Search**: Type a dish name in the search bar and hit Enter or click the search icon to find recipes.
- **Favorites**: Click the heart icon on any recipe card to save it to your favorites. Click again to remove it from favorites.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss improvements or features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Acknowledgements

- [Edamam](https://developer.edamam.com/) for providing the recipe API.
- [React](https://reactjs.org/) for the component-based architecture.
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.
- [DaisyUI](https://daisyui.com/) for the modern and intuitive user interface.
