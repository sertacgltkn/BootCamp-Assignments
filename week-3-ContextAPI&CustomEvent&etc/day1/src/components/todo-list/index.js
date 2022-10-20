import React, { useState, useEffect } from "react";
import classes from "./style.module.css";       //classes ile module.css importu gerçekleştirildi.
import Button from "../button";

const url = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(20);
  

  useEffect(() => {                         //API'lere istek atmak için önerilen yöntem useEffect hookudur.
    fetch(url)                              // fetch url ile çağrı yaptık.            
      .then((response) => response.json())  //gelen response'u json'a çevirdik.
      .then((todos) => {                    // jsonu todos state'ina atadık.
        setTodos(todos);                    // state'deki değişiklikleri setTodos state'ine atadık.
      }).catch(err => {                     // herhangi bir hatada catch'e düşecek olan error methodu yazıldı.                
        console.log(err)
      })
  }, []);


  useEffect(() => {
    const totalPage = Math.ceil(todos.length / perPage);
    setTotalPages(totalPage);
  }, [todos, perPage]);

  const getTodoWithPage = (page) => {
   return todos.slice((page -1) * perPage, page * perPage);
  };

  const value = { todos, getTodoWithPage, totalPages, page, perPage};

  const renderThead = () => {
    return (
    <thead>
            <tr>
            <th>
                ID
            </th>
            <th>
                Başlık
            </th>
            <th>
                Durumu
            </th>
            <th>
                Aksiyon
            </th>
            </tr>
        </thead>
  )}

  const remove = (e, todo) => {
    if (window.confirm("Silmek üzeresiniz emin misiniz?")) {
      setTodos(prev => {
        return prev.filter(x => x.id !== todo.id)
      })
    }
  }

  const edit = (todo) => {
		setSelectedTodo(todo)
		setTodos((prev) => {
			return prev.filter((x) => x.title === todo.title)
		})


	};

  const renderTbody = () => {
    return (
      <tbody>
        {todos.slice(0, 15).map((todo, index) => (      /* önce state olan todos'umuzdan slice methodunun sağladığı aralık parametresi ile
                                                         0 ile 15 arasında göstereceğimiz sayfaadki madde sayısını belirttik. */   
            <tr key={index}>                            {/* map ile de ekrana yazdırma hazırlığını yaptık  */}
                <td>                                    {/* index'den sonraki mor parantez aslında return ile aynı işlevi görür */} 
                {todo.id}
                </td>
                <td>
                {todo.title}
                </td>
                <td>
                {todo.completed ? "tamamlandı" : "yapılacak"}
                
                </td>
                <td>
                    <button className={`btn btn-sm btn-danger ${classes.actionButton}`}
                            onClick={() => remove(todo)}>
                        sil    
                    </button>
                    <button className="btn btn-sm btn-warning" type="submit"
                            onClick={() => edit(todo) }>
                    düzenle
                    </button>
                </td>
            </tr>                                                
                                                     
        ))}                                                     
            
        </tbody>
  )}

      const renderEditForm = () => {
        return (
          <div>
            <input type={"text"}/>
            <input type="check"/>
            <button onClick={() => setSelectedTodo(todos)} className="btn btn-sm btn-success">Kaydet</button>
            <button onClick={() => setSelectedTodo(undefined)} className="btn btn-sm btn-info">Vazgeç</button>
          </div>
        )
      }

      const paginate = () => {
        const pages = [];
        for (let i = 1; i <= todos.length / 15 + 1; i++) {
          pages.push(i);
        }
    
        return (
          <nav className="d-flex justify-content-center" aria-label="Page navigation example">
            <ul className="pagination">
              {
                pages.map(page => {
                  return (
                    <li
                      className={`page-item ${setPage === page ? "active" : ""}`}
                      key={page}
                      onClick={() => setPage(page)}
                    >
                      <a className="page-link">{page}</a>
                    </li>
                  );
                })
              }
            </ul>
          </nav>
        );
      };
      

  return (
    <div className= {`${classes.container} container`}> {/*style class'ını containera işliyoruz. */}
    {selectedTodo && renderEditForm()}
    <table className="table">
      {renderThead()}
      {renderTbody()}
      
        
        </table>                                        
                                                               
    </div>
  );
};

export default TodoList;
