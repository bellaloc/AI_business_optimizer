# Customer Segmentation Tool Implementation

class SegmentationTool:
    def __init__(self, algorithm):
        """
        Initialize the SegmentationTool.

        Parameters:
        - algorithm: An instance of the SegmentationAlgorithm class.
        """
        self.algorithm = algorithm

    def analyze_data(self, input_data):
        """
        Analyze input data using the segmentation algorithm.

        Parameters:
        - input_data: The input data to be segmented.

        Returns:
        - segment_labels: The predicted segment labels.
        """
        return self.algorithm.predict_segment(input_data)
