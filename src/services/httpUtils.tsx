export const handleHttpError = (error: IHttpError, context: string) => {
  if (process.env.NODE_ENV !== 'test') {
    console.tron(error, context);
  }
};

export default handleHttpError;
