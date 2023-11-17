const { urlencoded } = require("express");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { URL } = require("./config/config");
const Proposal = require("./model/Proposal_model");
const port = URL.port;

require("./utils/Database");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Login
app.get("/", (req, res) => {
  res.render("login", {});
});

// Pengajuan proposal
app.get("/proposal/add", (req, res) => {
  res.render("pengajuan_proposal", {});
});

// Proses pengajuan proposal
app.post("/proposal", (req, res) => {
  Proposal.insertMany(req.body).then(() => {
    res.redirect("/proposal/upk");
  });
});

// Dashbord proposal UPK
app.get("/proposal/upk", async (req, res) => {
  const proposal = await Proposal.find();
  const upk = proposal.filter((item) => item.status == "UPK");
  const ditolak = proposal.filter((item) => item.status == "Ditolak");
  res.render("persetujuanproposal_upk", { proposal, upk, ditolak });
});

// UPK setuju proposal
app.get("/proposal/upk/setuju/:nama", async (req, res) => {
  const proposal = await Proposal.findOne({ nama: req.params.nama });
  proposal.status = "Keuangan";
  await proposal.save();
  res.redirect("/proposal/upk");
});

// UPK tolak proposal
app.get("/proposal/upk/tolak/:nama", async (req, res) => {
  const proposal = await Proposal.findOne({ nama: req.params.nama });
  proposal.status = "Ditolak UPK";
  await proposal.save();
  res.redirect("/proposal/upk");
});

// Rincian proposal UPK
app.get("/proposal/upk/:nama", async (req, res) => {
  const proposal = await Proposal.findOne({ nama: req.params.nama });
  res.render("rincian_proposal_upk", { proposal });
});
