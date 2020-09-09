const handleSubmit = function (event) {
    event.preventDefault();
//Get URL frim the end user
let formText = document.getElementById('name').value;
    // check for valid url
    if (Client.CheckingURL(formText)) {
        console.log("::: Form Submitted :::");
        meaningcloud('http://localhost:8094/article', formText).then((result) => {

        updateUI();
    });

    } else {
        document.getElementById('error').innerHTML = '<p><br>Please Enter a Valid URL.<br><p>';
        }
};

    const meaningcloud = async (url , input) => {
        const res = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: input})
        });
        try {
            const result = await res.json();
            return result;
        } catch (error) {
            console.log('error', error);
            return null;
        }
        }

        const updateUI = async () => {
            const request = await fetch('http://localhost:8094/all');
            try{
              const allData = await request.json();
              console.log(allData);
              
              document.getElementById("polarity").innerHTML = `<p>Polarity: ${allData[0].polarity}<p>`;
              document.getElementById("agreement").innerHTML = `<p>Agreement: ${allData[0].agreement}<p>`;
              document.getElementById("subjectivity").innerHTML = `<p>Subjectivity: ${allData[0].subjectivity}<p>`;
              document.getElementById("confidence").innerHTML = `<p>Confidence: ${allData[0].confidence}<p>`;
              document.getElementById('irony').innerHTML = `<p>Irony: ${allData[0].irony}<p>`;
            
          
            }catch(error){
              console.log("error", error);
            }
          }
          
export { handleSubmit, meaningcloud, updateUI}