import type { NextApiRequest, NextApiResponse } from 'next'
import openai from '../../lib/chatGpt'

type Option = {
    value: string,
    label: string,
}

type Data = {
    modelOption: Option[],
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const models = await openai.listModels().then((res) => res.data.data);
    

    const modelOption = models.map((model) => ({
        value: model.id,
        label: model.id,
    }));

    console.log(modelOption);
    

    res.status(200).json({
        modelOption,
    })
}