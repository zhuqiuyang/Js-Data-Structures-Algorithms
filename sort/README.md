## Sorted Algorithm

### Basic
#### 1. Bubble Sort
- Outer Iterate n-1 times, every time float one bigest/smallest element to right end.
- Inner from zero index, compare two *adjoining* element

#### 2. Select Sort
- Outer Iterate n-1 time, every time *find* one bigest element to right end. 
- Compare sequence, if it's Big, catch it in temp until end

#### 3. Insert Sort
- First sorted Array is Array[0]
- Every time add one element to the *Sorted Array*
- Get New Sorted Array repeatly.

### Advanced
#### 4. Shell Sort
- Combine *Insert Sort* with one gaps Array
- last gap element is 1
- Ad: *Distant element* will get its position fast.

#### 5. Merge Sort
- 1. length = 1 ,return ; because it's sorted
- 2. divided arr to left & right
- 3. recursion for left & right

#### 6. Quick Sort
- 1. length === 0 ,return ; because catch a pivot
- 2. find pivot
- 3. recursion for left & right