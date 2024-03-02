import { ChatOllama } from '@langchain/community/chat_models/ollama';
import { BytesOutputParser } from '@langchain/core/output_parsers';

export async function POST(req: Request) {
  //TODO streamed response
  //TODO chat history
  //TODO RAG
  //TODO system message
  try {
    const { query } = await req.json();

    const model = new ChatOllama({
      baseUrl: 'http://host.docker.internal:11434',
      model: 'mistral',
    });

    const parser = new BytesOutputParser();

    const stream = await model.pipe(parser).stream(query);

    return new Response(stream, { status: 200 });
  } catch (e) {
    return new Response(
      JSON.stringify({
        error: 'Something wrong happened. Please, try again later.',
      }),
      { status: 500 },
    );
  }
}
