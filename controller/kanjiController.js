const jishoApi = require('unofficial-jisho-api');
const jisho = new jishoApi();

exports.findByKanji = async (req,res) =>{

    const {kanji} = req.params ;

    jisho.searchForKanji(kanji).then(result => {
        //   console.log(result.json());
          console.log(result);
          res.send(result).status(201);
        
        }).catch((err)=>{
            console.log(err)
        });
  




}