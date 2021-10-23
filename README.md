# TULIP

## Tulip is a json based no sql database its very easy to use 😊

## 🚀 Instalation

Just Run this command in your projects root terminal

```
npm i tulip-db
```


## 🚀 Usage

Create a box

```
var data = await createBox("YOUR BOX NAME")
console.log(data)
```


Add Data in box

```
var data = await addOne({
      table:"YOUR TABLE NAME",
      data:{
          name:"shibam",
          age:21
      }
})
    console.log(data)
```


Find Data from your box

```
var data = await findAll({
        table:"YOUR BOX NAME",
        key:'SEARCH FIELD NAME',
        value:"SEARCH VALUE"
    })

    console.log(data)
```



Delete Data from your box

```
var data = await deleteOne({
        table:"YOUR BOX NAME",
        id:"ID OF THAT SPECIFIC DATA"
    })
    console.log(data)
```

Get All Data Fromyour box

```
var data = await getAll('YOUR BOX NAME')
console.log(data)
```


Delete All data from box

```
var data = await clearBox({
        table:"YOUR BOX NAME"
    })
    console.log(data)
```
