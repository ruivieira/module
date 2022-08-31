window.BENCHMARK_DATA = {
  "lastUpdate": 1661980179709,
  "repoUrl": "https://github.com/ruivieira/trustyai-explainability-python",
  "entries": {
    "TrustyAI continuous benchmarks": [
      {
        "commit": {
          "author": {
            "email": "ruidevieira@googlemail.com",
            "name": "Rui Vieira",
            "username": "ruivieira"
          },
          "committer": {
            "email": "ruidevieira@googlemail.com",
            "name": "Rui Vieira",
            "username": "ruivieira"
          },
          "distinct": true,
          "id": "f26af11ba6a2b2cd3f049ab828964eecd66b3863",
          "message": "Add LIME benchmark",
          "timestamp": "2022-08-31T20:57:15+01:00",
          "tree_id": "51c1d710aa811f7ed87d76e5ce20412751c995e6",
          "url": "https://github.com/ruivieira/trustyai-explainability-python/commit/f26af11ba6a2b2cd3f049ab828964eecd66b3863"
        },
        "date": 1661976007997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match",
            "value": 0.8695062702530627,
            "unit": "iter/sec",
            "range": "stddev: 0.011213948401490334",
            "extra": "mean: 1.1500779628753661 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match_python_model",
            "value": 1.8679120292342226,
            "unit": "iter/sec",
            "range": "stddev: 0.0027635963039894743",
            "extra": "mean: 535.3571176528931 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_non_empty_input",
            "value": 1604.874585136753,
            "unit": "iter/sec",
            "range": "stddev: 0.0003463087515508682",
            "extra": "mean: 623.1016487277659 usec\nrounds: 1662"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ruidevieira@googlemail.com",
            "name": "Rui Vieira",
            "username": "ruivieira"
          },
          "committer": {
            "email": "ruidevieira@googlemail.com",
            "name": "Rui Vieira",
            "username": "ruivieira"
          },
          "distinct": true,
          "id": "731e3dd7eb154ef21b4ed484b1ecab553e5519ed",
          "message": "Restore saving to same repo",
          "timestamp": "2022-08-31T21:43:51+01:00",
          "tree_id": "0d130b8c4bae013a2df1c357f447d8e76c6112f9",
          "url": "https://github.com/ruivieira/trustyai-explainability-python/commit/731e3dd7eb154ef21b4ed484b1ecab553e5519ed"
        },
        "date": 1661978867954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match",
            "value": 0.4302784115022133,
            "unit": "iter/sec",
            "range": "stddev: 0.20008620753224376",
            "extra": "mean: 2.3240766286849976 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_non_empty_input",
            "value": 3.6453889823539978,
            "unit": "iter/sec",
            "range": "stddev: 0.030994907904331223",
            "extra": "mean: 274.31914806365967 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match_python_model",
            "value": 1.1697122484955826,
            "unit": "iter/sec",
            "range": "stddev: 0.017907188327231486",
            "extra": "mean: 854.9111127853394 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ruidevieira@googlemail.com",
            "name": "Rui Vieira",
            "username": "ruivieira"
          },
          "committer": {
            "email": "ruidevieira@googlemail.com",
            "name": "Rui Vieira",
            "username": "ruivieira"
          },
          "distinct": true,
          "id": "2cedc0e80d6ed63074b8be020af943b71954fb82",
          "message": "Disable fail on alert",
          "timestamp": "2022-08-31T21:48:22+01:00",
          "tree_id": "9e879c553192833cb16836faabdaf4209bb0dd39",
          "url": "https://github.com/ruivieira/trustyai-explainability-python/commit/2cedc0e80d6ed63074b8be020af943b71954fb82"
        },
        "date": 1661979075532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match",
            "value": 0.8178364334542613,
            "unit": "iter/sec",
            "range": "stddev: 0.008139713839893311",
            "extra": "mean: 1.2227383852005005 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_non_empty_input",
            "value": 6.9499133809275655,
            "unit": "iter/sec",
            "range": "stddev: 0.0031027757310089334",
            "extra": "mean: 143.88668537139893 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match_python_model",
            "value": 1.6674542173078426,
            "unit": "iter/sec",
            "range": "stddev: 0.03340608329239158",
            "extra": "mean: 599.7166156768799 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ruidevieira@googlemail.com",
            "name": "Rui Vieira",
            "username": "ruivieira"
          },
          "committer": {
            "email": "ruidevieira@googlemail.com",
            "name": "Rui Vieira",
            "username": "ruivieira"
          },
          "distinct": true,
          "id": "2cedc0e80d6ed63074b8be020af943b71954fb82",
          "message": "Disable fail on alert",
          "timestamp": "2022-08-31T21:48:22+01:00",
          "tree_id": "9e879c553192833cb16836faabdaf4209bb0dd39",
          "url": "https://github.com/ruivieira/trustyai-explainability-python/commit/2cedc0e80d6ed63074b8be020af943b71954fb82"
        },
        "date": 1661980178866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match",
            "value": 0.816177417649649,
            "unit": "iter/sec",
            "range": "stddev: 0.013373835288311526",
            "extra": "mean: 1.2252238035202025 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_non_empty_input",
            "value": 6.936400431170063,
            "unit": "iter/sec",
            "range": "stddev: 0.0030276228853839946",
            "extra": "mean: 144.16699409484863 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match_python_model",
            "value": 1.607904027430986,
            "unit": "iter/sec",
            "range": "stddev: 0.004100060924786048",
            "extra": "mean: 621.9276666641235 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}