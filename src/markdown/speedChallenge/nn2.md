---
path: "/kraoBlog/ml/speedChallenge/2"
date: "2020-05-16"
title: "Speed Challenge from Comma AI Part 2"
---

# Speed Challenge

In order to get the model to compile correctly, all input arrays need to be numpy arrays. 

```
labels = []

with open('data/train.txt', 'r') as f:
    for line in f:
        labels.append(float(line))

train_labels = labels[:16320]
test_labels = labels[16320:]

train_labels = np.array(train_labels)
test_labels = np.array(test_labels)
```

After getting the data in the correct type format, you can then structure the network:

```
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(100, 100)),
    keras.layers.Dense(128, activation='tanh'),
    keras.layers.Dense(1, activation='linear')
])
```

This doesn't make any sense for the speed challenge dataset, but it compiles and the data is flowing correctly.

This is where you can start tweaking th enetwork architecture, loss functions, and other hyperparameters.

However, a simple feedforward nn doesn't work at all in this situation because we are estimating speed of a car per frame. That is impossible to estimate if you look at a still image. A frame needs to look at a previous frame in order to better estimate speed. This goes into Recurrent Neural networks.


## Recurrent Neural networks

In RNNs, each feedforward iteration is not an isolated loss check, it also depends on the previous iteration which influences the loss calculation. 

This makes sense when data is sequential. A common use case for this is in text completion. When a letter is typed, the next letter or word completion is not random, it depends on the letter prefix. If I type 'h', autocomplete will preduct "he" or "hello". the e and ello depend on h in order to be accurate.

