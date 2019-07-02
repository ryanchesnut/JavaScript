
import {StyleSheet} from 'react-native'; 
export const styles = StyleSheet.create({
    // App container
    container: {
        flex: 1,                            // Take up all screen
        backgroundColor: '#E91E63',         // Background color
    },
    // Tab content container
    content: {
        flex: 1,   
        textAlign: 'center',                         // Take up all available space
        //justifyContent: 'center',           // Center vertically
        //alignItems: 'center',               // Center horizontally
        backgroundColor: '#C2185B',         // Darker background for content area
    },
    tabContainer: {
        flex: 1,                            // Take up equal amount of space for each tab
        paddingVertical: 15,                // Vertical padding
        borderBottomWidth: 3,               // Add thick border at the bottom
        borderBottomColor: 'transparent',   // Transparent border for inactive tabs
    },
    tabsContainer: {
        flexDirection: 'row',               // Arrange tabs in a row
        paddingTop: 100,                     // Top padding
    },
    tabContainerActive: {
        borderBottomColor: '#FFFFFF',       // White bottom border for active tabs
    },
    tabText: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    // Content header
    header: {
        margin: 0,                         // Add margin
        color: '#FFFFFF',                   // White color
        fontFamily: 'Avenir',               // Change font family
        fontSize: 26,                       // Bigger font size
    },
    // Content text
    text: {
        marginHorizontal: 10,               // Add horizontal margin
        color: 'rgba(255, 255, 255, 0.75)', // Semi-transparent text
        textAlign: 'center',                // Center
        fontFamily: 'Avenir',
        fontSize: 18,
    },
    contentContainer: {
        flex: 1                             // Take up all available space
    }
});