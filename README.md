# Mini Project: Website Ecommmerce

## Setup environment

Github Project: https://github.com/minhtrung0110/shop-ecommerce.git

### 1. Setup ReactJS App via Create React App

> Link: https://create-react-app.dev/docs/getting-started/

### 2. Add SCSS Support

```js
npm i --save-dev node-sass
```

### 3. Add React Router

```
npm i --save react-router-dom
```

### 4. Add Redux

```
npm i redux redux-react redux-devtools-extension
```
### 5. Add Classnames

```
npm i classnames
```
### 6. Add Font Awesome

```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

```
### 7. Add  Axios

```
npm i axios
```
### 8. Add Customize-cra

```
npm i customize-cra react-app-rewired --dev
```
### 9. Add Formik Yup

```
npm i formik yup --dev
```
### 10. Add React-Hook-Form

```
npm i react-hook-form
```
### 11. Add React-Content-Loader

```
npm i react-content-loader
```
### 12. Add React-Toastify

```
npm i react-toastify
```
## Tổ chức folder

```
src
|__assets
|__components
|__config
|__layouts
|__pages
|__redux
|__routers
|__services
|__utils

- Cầu trúc này còn rất nhiều điểm hạn chế và nhiều khuyết điểm 
- Không nên kế thừa và sử dụng cấu trúc này nên tuỳ biến lại
```

## Tổ chức routing

- publicRoutes là các địa chỉ không bị giới hạn đăng nhập ngược lại privateRoutes là các địa chỉ yêu cầu đăng nhập
- 

```js
// App.js
function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    {

                        publicRoutes.map((item,index) => {

                            let Layout =DefaultLayout
                            if(item.layout===null) Layout = Fragment
                            else
                            if(item.layout) Layout = item.layout

                            return <Route key={index} path={item.path}
                                          element={
                                              <Layout>{item.component}</Layout>
                                          }
                            ></Route>
                        })
                    }

                </Routes>
            </div>
        </Router>
    );
}

```



## Gui Website
 - Thiết Kế Có Sẵn

### Home Page
![img.png](img.png)
## To Be Continued