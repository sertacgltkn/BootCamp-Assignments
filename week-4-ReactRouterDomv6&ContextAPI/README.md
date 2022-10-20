<h1 style="color:white; font-weight:700"> REACT CLASS COMPONENTS  <h1>

## **Class Component Nedir ? Class Componentler Yerini Functional Componentlere Nasıl ve Ne Zaman Bıraktı ?**

 <p>  İki adet component tanımlama biçimi vardır. Bunlardan biri de class component'tir. Class component'ler Şubat 2019'da React Hook'lar çıkana kadar kullanılan component yapısıdır. Class componentler bu gelişmeden önce veri geçişini sağlayabilen tek yapılardı. Yani Functional Components'lerde veri geçişi sağlanamıyordu. (Stateless ve Stateful) React Hook'ların v16.8 ile birlikte hayatımıza girmesiyle birlikte Functional Component'ler daha genel şekilde kullanılmaya başlanmıştır. Eski projelerde halen kullanılan Class Component'ler güncelliğini yitirmek durumunda kalmıştır. <p>
<p>Ayrıca Functional Component'lerde daha az kod yazılarak işlemler görülebilmektedir.  <p>

### **Class Component Örneği**

```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Merhaba Dünya</h1>
      </div>
    );
  }
}

export default App;
```


### **Functional Component Örneği**

```javascript
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Merhaba Dünya</h1>
    </div>
  );
};

export default App;
```



### **Lifecycle Methodları**

    | constructor | Component'in oluşturulmasında ilk çalışan methoddur. |
    | render | Component'in render edilmesi için çalışan methoddur. |
    | componentDidMount | Component'in render edilmesinden sonra çalışan methoddur. |
    | componentDidUpdate | Component'in güncellenmesi durumunda çalışan methoddur. |
    | componentWillUnmount | Component'in kaldırılması durumunda çalışan methoddur. |

#### Constructor

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

#### Render

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Arttır</button>
            </div>
        );
    }

#### Component Did Mount

```javascript
componentDidMount() {
    //component mount edildikten sonra yapılacak işlemler
}
```

#### Component Did Update

```javascript
componentDidUpdate(prevProps, prevState) {
    //component update edildikten sonra yapılacak işlemler
}
```

#### Component Will Unmount

```javascript
componentWillUnmount() {
    //component unmount edildikten sonra yapılacak işlemler
}
```

#### Kaynaklar

- [React Class Component Nedir?](<https://innovance.com.tr/react-hookkanca-gecisi/#:~:text=React%20ekosisteminde%20olanların%20bildiği%20üzere,kancalar(hooks)%20hayatımıza%20girdi.>)
- [React Class Component vs Function Component](https://www.youtube.com/watch?v=2Pi_YwD6PbU&ab_channel=SOSYALBİLİŞİM)
- [React Lifecycle Methods](https://www.w3schools.com/react/react_lifecycle.asp#:~:text=Each%20component%20in%20React%20has,Mounting%2C%20Updating%2C%20and%20Unmounting.)
