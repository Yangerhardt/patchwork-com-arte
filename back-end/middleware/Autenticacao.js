//Check to make sure header is not undefined, if so, return Forbidden (403)
 export const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado." });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token inválido" });
  }
};

// Middleware para verificar se a página de requisição é a página da aplicação. Se não for, negará o acesso
export const checkHost = (req, res, next) => {
  const host = req.headers.origin
  if (host != process.env.PAGE_URL) {
    res.status(404).json({ msg: "Sem permissão" })
  } else {
    next()
  }
}

