const jishoApi = require('unofficial-jisho-api');
const jisho = new jishoApi();
const axios = require('axios')
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


exports.listByGrade = async (req, res) => {
  const { grade } = req.params;

  try {
    const response = await axios.get(`https://kanjiapi.dev/v1/kanji/grade-${grade}`);
    res.json(response.data); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the data' }); 
  }
};