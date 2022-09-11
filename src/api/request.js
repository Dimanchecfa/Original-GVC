import { handlingErrors, HTTP_CLIENT } from "./client";
import { getToday } from './request';




export const  getAllStock = (page) => {
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get(`/stock/page/${page}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(handlingErrors(error));
            });
    });
};




export const getStock = (id) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get(`/stock/${id}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const createStock = (data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.post("/stock", data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const updateStock = (id, data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.put(`/stock/${id}`, data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const deleteStock = (id) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.delete(`/stock/${id}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const getAllMarque = () => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get("/marque")
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};  

export const getMarque = (id) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get(`/marque/${id}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};
export const createMarque = (data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.post("/marque", data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const updateMarque = (id, data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.put(`/marque/${id}`, data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const deleteMarque = (id) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.delete(`/marque/${id}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const getAllModel = () => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get("/model")
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const getModel = (id) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get(`/model/${id}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const createModel = (data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.post("/model", data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);    
            });
    });
};

export const updateModel = (id, data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.put(`/model/${id}`, data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const deleteModel = (id) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.delete(`/model/${id}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const getAllMoto = (page) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get(`/moto/page/${page}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
    
};

export const getMoto = (numero_serie) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get(`/moto/${numero_serie}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const createMoto = (data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.post("/moto", data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const updateMoto = (numero_serie, data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.put(`/moto/${numero_serie}`, data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const deleteMoto = (numero_serie) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.delete(`/moto/${numero_serie}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const getAllVente = (page) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get(`/vente/page/${page}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const getVente = (id) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get(`/vente/${id}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const createVente = (data) => {
    new Promise ((resolve, reject) => { 
        HTTP_CLIENT.post("/vente", data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const updateVente = (id, data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.put(`/vente/${id}`, data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const deleteVente = (id) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.delete(`/vente/${id}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const getAllCommerciale = () => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get("/commerciale")
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const getCommerciale = (id) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.get(`/commerciale/${id}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};
export const createCommerciale = (data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.post("/commerciale", data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const updateCommerciale = (id, data) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.put(`/commerciale/${id}`, data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};

export const deleteCommerciale = (id) => {
    new Promise ((resolve, reject) => {
        HTTP_CLIENT.delete(`/commerciale/${id}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
};





export const getTodaySellPrice = () => {
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get("dashboard_price")
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
       
} );
}   
export const getTodaySellMoto = () => {
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get("dashboard_moto")
            .then((response) => {
                
                resolve(response);
     })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
       
})
}


export const getSellByDate = (date) => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get(`history/${date}/sell`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}
export const getSellMotoNumberByDate = (date) => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get(`history/${date}/moto`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}
export const getLastMonthSell = () => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get("history/lastmonth")
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}
export const getLastMonthSellPrice = () => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get("history/lastmonth/price")
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

        })
}

export const getLastMonthSellMotonumber = () => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get("history/lastmonth/moto_number")
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}

export const getSellPriceByDate = (date) => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get(`history/${date}/price`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}

export const getSellNumberByDate = (date) => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get(`history/${date}/moto_number`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}

export const getCurrentMonthSell = () => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get("history/currentmonth/sell_moto")
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}

export const getCurrentMonthSellPrice = () => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get("history/currentmonth/price")
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}

export const getCurrentMonthSellMotoNumber = () => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get("history/currentmonth/moto_number")
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}

export const getMotoByStock = (page , numero_stock) => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get(`moto/${page}/${numero_stock}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })           
    })
   
}

export const getMotoByMarque = (marque) => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get(`moto/marque/${marque}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}

export const getMotoByStatut = (statut) => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get(`moto/statut/${statut}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}

export const getModelByMarque = (marque) => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get(`model/marque/${marque}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}

export const getCommercialeByPseudo = (pseudo) => {
    new Promise ((resolve , reject) => {
        HTTP_CLIENT.get(`commerciale/pseudo/${pseudo}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            })

            
    })
}







