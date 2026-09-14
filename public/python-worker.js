// The interpreter is loaded only after the student presses Run.
let pythonPromise;
self.onmessage = async ({ data }) => {
  let output = "";
  let scope;
  const append = (chunk) => {
    if (output.length < 30000) output += chunk;
    else if (!output.endsWith("\n[Çıktı sınırına ulaşıldı.]"))
      output += "\n[Çıktı sınırına ulaşıldı.]";
  };
  try {
    pythonPromise ??= import(
      "https://cdn.jsdelivr.net/pyodide/v314.0.6/full/pyodide.mjs"
    )
      .then(({ loadPyodide }) =>
        loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v314.0.6/full/",
        }),
      )
      .catch((error) => {
        pythonPromise = null;
        throw error;
      });
    const py = await pythonPromise;
    self.postMessage({ type: "ready" });
    const inputs = data.input.replace(/\r\n/g, "\n").split("\n");
    let cursor = 0;
    py.setStdin({
      stdin: () => (cursor < inputs.length ? inputs[cursor++] : null),
    });
    // Byte writers preserve prompts even when input() does not append a newline.
    const decoder = new TextDecoder();
    const write = (bytes) => {
      append(decoder.decode(bytes, { stream: true }));
      return bytes.length;
    };
    py.setStdout({ write });
    py.setStderr({ write });
    scope = py.toPy({ __name__: "__main__" });
    const result = await py.runPythonAsync(data.code, { globals: scope });
    result?.destroy?.();
    append(decoder.decode());
    self.postMessage({ type: "result", output });
  } catch (error) {
    self.postMessage({
      type: "error",
      output,
      message: error.message || String(error),
    });
  } finally {
    scope?.destroy();
  }
};
