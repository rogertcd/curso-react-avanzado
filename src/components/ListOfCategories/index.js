import React, {Fragment, useEffect, useState} from 'react';
import {Category} from "../Category";
import {List, Item} from "./styles";
// import {categories as mockCategories} from "../../../api/db.json";
import Axios from 'axios';

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true);
    let apiServer;
    const fetchCategories = async () => {
      apiServer = await Axios.get('https://clongram-api-j2hwstk1d.now.sh/categories');
      // console.log('apiServer', apiServer.json())
      setCategories(apiServer.data);
      setLoading(false);
    }
    // await Axios.get(`https://clongram-api-j2hwstk1d.now.sh/categories`)
    //   .then(res => {
    //     console.log('res', res);
    //     apiServer = res.json();
    //     // setCategories(res.json());
    //   });

    fetchCategories();
    // window.fetch('https://clongram-api-j2hwstk1d.now.sh/categories')
    //   .then(res =>res.json())
    //   .then(response => {
    //     setCategories(response)
    //   })
  }, []);

  return { categories, loading }
}

export const ListofCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Item key={'loading'}>
            <Category />
          </Item> : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  );

  if (loading) {
    return 'Cargando...';
  }

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
}
