import openai from "./chatGpt";

const query = async (prompt: string, chatId:string, model:string) => {
    const response = await openai.createCompletion({
        model: model,
        prompt: prompt,
        temperature: 0.9,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
    .then((res) => res.data.choices[0].text)
    .catch((err) => 
        `Kaushik was unable to find an answer for that! (Error: ${err.message})`
    );

    return response;
}

export default query;