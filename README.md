# 🛒 Elegant Context  

This project is a simple **shopping cart application** that demonstrates the power of **React Context API** and **useReducer** for state management. It helps in understanding how to **avoid prop drilling**, manage state efficiently, and structure a scalable React application.  

This project is part of the **"React - The Complete Guide 2025 (incl. Next.js, Redux)"** by **Maximilian Schwarzmüller**.  

## ✨ Features  
- 🔄 **Understanding Prop Drilling**: Recognizing issues with deeply nested props.  
- 🔌 **Introducing the Context API**: Providing a better way to share state.  
- 🌍 **Creating & Providing Context**: Centralized state management.  
- 📡 **Consuming Context**: Accessing data without prop drilling.  
- 🔗 **Linking Context to State**: Dynamic UI updates with context.  
- ⚡ **Different Ways to Consume Context**: Exploring multiple techniques.  
- 🔄 **Handling Context Value Changes**: Reacting to state updates.  
- 🚀 **Migrating the Entire Project to Context API**: Replacing prop drilling.  
- 📦 **Outsourcing Context & State into a Separate Provider Component**: Cleaner architecture.  
- 🔥 **Introducing the useReducer Hook**: Enhancing state management.  
- 📢 **Dispatching Actions & Editing State with useReducer**: Efficiently modifying app state.  

## 📁 Project Structure  
```
src/
│── components/
│   ├── Cart.jsx              # 🛍️ Displays cart items  
│   ├── CartModal.jsx         # 🪟 Modal for cart summary  
│   ├── Header.jsx            # 🏷️ Displays navigation & cart button  
│   ├── Product.jsx           # 🛒 Individual product component  
│   ├── Shop.jsx              # 🏬 Main shop layout  
│── store/
│   ├── shopping-cart-context.jsx  # 🔄 Manages cart state using Context API & useReducer  
│── App.jsx                    # 🚀 Main application component  
│── index.jsx                  # 🎯 Entry point  
│── index.css                  # 🎨 Global styles  
```  

## ⚙️ Installation & Usage  
1. Clone the repository:  
   ```sh  
   git clone https://github.com/Mohamed-Esmat/elegant-context-react-project.git  
   ```
2. Navigate to the project directory:  
   ```sh  
   cd elegant-context-react-project  
   ```  
3. Install dependencies:  
   ```sh  
   npm install  
   ```  
4. Start the development server:  
   ```sh  
   npm run dev  
   ```  

## 🌍 Demo  
You can view the live demo of the project here:  
🔗 [Live Demo](https://elegant-context-react-esmat-project.vercel.app/)  

## 🛠️ Technologies Used  
- ⚛️ **React**  
- 🔗 **Context API**  
- 🔥 **useReducer Hook**  
- 🎨 **CSS for Styling**  

## 🤝 Contribution  
Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request. 🚀  

## 📜 License  
This project is part of the **"React - The Complete Guide 2025 (incl. Next.js, Redux)"** by **Maximilian Schwarzmüller** and follows an MIT License.
